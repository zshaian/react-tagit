import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import type { InputTagProps } from "./InputTag.stories.types";
import InputTag from "./InputTag";

describe("InputTag Component", () => {
  const setup = (propsOverride: Partial<InputTagProps> = {}) => {
    const onChangeMock = jest.fn();

    render(<InputTag value={[]} onChange={onChangeMock} {...propsOverride} />);
    const input = screen.getByLabelText(/tags/i) as HTMLInputElement;

    return {
      input,
      onChangeMock,
    };
  };

  test("renders without crashing", () => {
    setup();
    expect(screen.getByLabelText(/tags/i)).toBeInTheDocument();
  });

  test("adds a tag on pressing Enter", () => {
    const { input, onChangeMock } = setup();

    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Function));

    // simulate internal call (optional, to show what's inside the callback)
    const updatedTags: Array<string> = [];
    const result = onChangeMock.mock.calls[0][0](updatedTags);
    expect(result).toContain("React");
  });

  test("does not add duplicate tags", () => {
    const { input, onChangeMock } = setup({ value: ["React"] });

    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onChangeMock).not.toHaveBeenCalled();
  });

  test("removes a tag when backspace is pressed and input is empty", () => {
    const { input, onChangeMock } = setup({ value: ["React", "Vue"] });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.keyDown(input, { key: "Backspace", code: "Backspace" });

    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Function));

    const prevTags = ["React", "Vue"];
    const newTags = onChangeMock.mock.calls[0][0](prevTags);
    expect(newTags).toEqual(["React"]);
  });
});

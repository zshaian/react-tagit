import React from 'react';
import { Tag } from '../tag';
import { Fragment, useRef, useState } from 'react';
import './InputTag.css';
import type { InputTagProps } from './InputTag.types';

export default function InputTag({
  autoFocus = false,
  customClass,
  disabled = false,
  inputTagContainerStyleProps,
  labelStyleProps,
  inputStyleProps,
  tagsContainerStyleProps,
  tagsStyleProps,
  removeTagBtnStyleProps,
  hideLabel = false,
  label = 'Tags',
  maxTags,
  maxTagsValue,
  name = 'tags',
  separator = 'Enter',
  theme,
  value,
  onChange,
  onFocus = () => {},
  onBlur = () => {},
}: InputTagProps) {
  const inputTagRef = useRef<HTMLInputElement>(null);
  const [tagInputValue, setTagInputValue] = useState<string>('');

  const valueIsNotAlreadyInTags =
    value.filter(
      tag => tag.toLowerCase().trim() === tagInputValue.toLowerCase().trim(),
    ).length === 0;
  const valueIsNotEmpty =
    tagInputValue.trim() !== '' && tagInputValue.length > 0;
  const isLessThanMaxTags =
    maxTags && maxTags > 0 ? value.length < maxTags : true;

  const separatorTriggerKey = separator === 'Enter' ? 'Enter' : ' ';

  const handleSetTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && !valueIsNotEmpty && value.length > 0) {
      handleRemoveTag(value[value.length - 1]);
    }
    if (
      event.key === separatorTriggerKey &&
      valueIsNotEmpty &&
      valueIsNotAlreadyInTags &&
      isLessThanMaxTags
    ) {
      onChange(previousTags => [...previousTags, tagInputValue]);
      setTagInputValue('');
    }
  };

  const handleRemoveTag = (tagName: string) => {
    onChange(previousTags => previousTags.filter(tag => tag !== tagName));
  };

  return (
    <div
      className={`${
        customClass?.inputTagContainerElement || 'input-tag-container-element'
      } input-tag-container`}
      style={inputTagContainerStyleProps}
      onClick={() => inputTagRef.current!.focus()}
    >
      <label
        htmlFor="tag-input"
        className={`${
          customClass?.inputTagLabelElement || 'input-tag-label-element'
        } input-tag-label ${theme}-input-tag-label`}
        style={{ ...labelStyleProps, display: hideLabel ? 'none' : 'block' }}
      >
        {label}
      </label>
      <ul
        className={`${
          customClass?.inputTagListContainerElement ||
          'input-tag-list-container-element'
        } input-tag-list-container ${theme}-input-tag-list-container`}
        style={{
          cursor: disabled ? 'default' : 'text',
          ...tagsContainerStyleProps,
        }}
      >
        {value.map(tag => (
          <Fragment key={tag}>
            <Tag
              customTagItemClass={customClass?.inputTagTagItemElement}
              customRemoveButtonClass={customClass?.inputTagTagRemoveBtnElement}
              customTagContentClass={customClass?.inputTagTagContentElement}
              disabled={disabled}
              tagName={tag}
              tagsStyleProps={tagsStyleProps}
              removeTagBtnStyleProps={removeTagBtnStyleProps}
              theme={theme}
              onRemoveTag={handleRemoveTag}
            />
          </Fragment>
        ))}
        <li>
          <input
            id="tag-input"
            aria-label={`${label} input`}
            ref={inputTagRef}
            type="text"
            className={`${
              customClass?.inputTagInputElement || 'input-tag-input-element'
            } input-tag-input ${theme}-input-tag-input`}
            value={tagInputValue}
            onKeyDown={handleSetTags}
            onChange={event => setTagInputValue(event.target.value)}
            autoFocus={autoFocus}
            minLength={1}
            maxLength={maxTagsValue}
            name={name}
            style={inputStyleProps}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
          />
        </li>
      </ul>
    </div>
  );
}

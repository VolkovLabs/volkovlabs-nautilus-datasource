import { defaults } from 'lodash';
import React, { FormEvent, useCallback } from 'react';
import { QueryEditorProps, SelectableValue } from '@grafana/data';
import { InlineField, InlineFieldRow, Input, RadioButtonGroup, Select } from '@grafana/ui';
import {
  AnnotationDashboard,
  AnnotationDashboardOptions,
  AnnotationRange,
  AnnotationRangeOptions,
  AnnotationState,
  AnnotationStateOptions,
  AnnotationType,
  AnnotationTypeOptions,
  DefaultQuery,
  RequestType,
  RequestTypeOptions,
  TestIds,
} from '../../constants';
import { DataSource } from '../../datasource';
import { DataSourceOptions, Query } from '../../types';

/**
 * Editor Properties
 */
type Props = QueryEditorProps<DataSource, Query, DataSourceOptions>;

/**
 * Query Editor
 */
export const QueryEditor: React.FC<Props> = ({ onChange, onRunQuery, query: rawQuery }) => {
  /**
   * Request Type change
   */
  const onRequestTypeChange = useCallback(
    async (item: SelectableValue<RequestType>) => {
      onChange({ ...rawQuery, requestType: item.value! });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Annotation Type change
   */
  const onAnnotationTypeChange = useCallback(
    async (type: AnnotationType) => {
      onChange({ ...rawQuery, annotationType: type });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Annotation Dashboard change
   */
  const onAnnotationDashboardChange = useCallback(
    async (type: AnnotationDashboard) => {
      onChange({ ...rawQuery, annotationDashboard: type });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Annotation Range change
   */
  const onAnnotationRangeChange = useCallback(
    async (type: AnnotationRange) => {
      onChange({ ...rawQuery, annotationRange: type });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Annotation Pattern change
   */
  const onAnnotationPatternChange = useCallback(
    async (e: FormEvent<HTMLInputElement>) => {
      onChange({ ...rawQuery, annotationPattern: e.currentTarget.value! });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Annotation Limit change
   */
  const onAnnotationLimitChange = useCallback(
    async (e: FormEvent<HTMLInputElement>) => {
      onChange({ ...rawQuery, annotationLimit: Number(e.currentTarget.value)! });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Annotation Prev State change
   */
  const onAnnotationPrevStateChange = useCallback(
    async (type: AnnotationState) => {
      onChange({ ...rawQuery, annotationPrevState: type });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Annotation New State change
   */
  const onAnnotationNewStateChange = useCallback(
    async (type: AnnotationState) => {
      onChange({ ...rawQuery, annotationNewState: type });
      onRunQuery();
    },
    [onChange, onRunQuery, rawQuery]
  );

  /**
   * Render
   */

  const query = defaults(rawQuery, DefaultQuery);

  return (
    <>
      <InlineFieldRow>
        <InlineField grow label="Request" labelWidth={10}>
          <Select
            options={RequestTypeOptions}
            value={RequestTypeOptions.find((type) => type.value === query.requestType)}
            onChange={onRequestTypeChange}
            aria-label={TestIds.queryEditor.fieldRequest}
          />
        </InlineField>
      </InlineFieldRow>

      {query.requestType === RequestType.ANNOTATIONS && (
        <>
          <InlineFieldRow>
            <InlineField label="Type" labelWidth={10} data-testid={TestIds.queryEditor.fieldAnnotationTypeContainer}>
              <RadioButtonGroup
                options={AnnotationTypeOptions}
                value={AnnotationTypeOptions.find((type) => type.value === query.annotationType)?.value}
                onChange={onAnnotationTypeChange}
              />
            </InlineField>

            <InlineField
              label="Dashboards"
              labelWidth={10}
              data-testid={TestIds.queryEditor.fieldAnnotationDashboardContainer}
            >
              <RadioButtonGroup
                options={AnnotationDashboardOptions}
                value={AnnotationDashboardOptions.find((type) => type.value === query.annotationDashboard)?.value}
                onChange={onAnnotationDashboardChange}
              />
            </InlineField>

            <InlineField
              label="Time Range"
              labelWidth={12}
              data-testid={TestIds.queryEditor.fieldAnnotationTimeRangeContainer}
            >
              <RadioButtonGroup
                options={AnnotationRangeOptions}
                value={AnnotationRangeOptions.find((type) => type.value === query.annotationRange)?.value}
                onChange={onAnnotationRangeChange}
              />
            </InlineField>
          </InlineFieldRow>

          {query.annotationType === AnnotationType.ALERT && (
            <InlineFieldRow>
              <InlineField
                label="Prev State"
                labelWidth={10}
                data-testid={TestIds.queryEditor.fieldAnnotationPrevStateContainer}
              >
                <RadioButtonGroup
                  options={AnnotationStateOptions}
                  value={AnnotationStateOptions.find((type) => type.value === query.annotationPrevState)?.value}
                  onChange={onAnnotationPrevStateChange}
                />
              </InlineField>
              <InlineField
                label="New State"
                labelWidth={10}
                data-testid={TestIds.queryEditor.fieldAnnotationNewStateContainer}
              >
                <RadioButtonGroup
                  options={AnnotationStateOptions}
                  value={AnnotationStateOptions.find((type) => type.value === query.annotationNewState)?.value}
                  onChange={onAnnotationNewStateChange}
                />
              </InlineField>
            </InlineFieldRow>
          )}

          <InlineFieldRow>
            <InlineField label="Text Pattern" labelWidth={20} grow tooltip="Regex format. Support variables.">
              <Input
                value={query.annotationPattern}
                onChange={onAnnotationPatternChange}
                data-testid={TestIds.queryEditor.fieldAnnotationPattern}
              />
            </InlineField>
            <InlineField label="Max Limit" labelWidth={10}>
              <Input
                type="number"
                value={query.annotationLimit}
                onChange={onAnnotationLimitChange}
                data-testid={TestIds.queryEditor.fieldAnnotationLimit}
              />
            </InlineField>
          </InlineFieldRow>
        </>
      )}
    </>
  );
};

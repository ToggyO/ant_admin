import { useEffect } from 'react';
import type { FormInstance } from 'antd/lib/form';

import { transformErrorToForm } from 'services/helpers';

/**
 * Helper hook function to pass errors from backend API to form
 * @return {Array<object>} errorsFromBackend - array of objects with errors
 * @return {FormInstance} formInstance - form instance
 * @return {void}
 */
export function useBackendErrors<T extends API.ValidationApiError>(
  validationErrorsFromBackend: T[] = [],
  formInstance: FormInstance,
) {
  useEffect(() => {
    if (validationErrorsFromBackend.length && formInstance) {
      const transformedErrors = transformErrorToForm<T>(validationErrorsFromBackend, formInstance);
      formInstance.setFields(transformedErrors);
    }
  }, [validationErrorsFromBackend, formInstance]);
}

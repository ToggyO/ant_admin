import { useEffect } from 'react';
import type { FormInstance } from 'antd/lib/form';

/**
 * Helper hook function to pass errors from backend API to form
 * @return {Array<object>} errorsFromBackend - array of objects with errors
 * @return {FormInstance} formInstance - form instance
 * @return {void}
 */
export const useBackendErrors = (errorsFromBackend = [], formInstance: FormInstance) => {
  useEffect(() => {
    if (errorsFromBackend.length && formInstance) {
      // const transformedErrors = transformErrorToForm(errorsFromBackend, ERROR_CODES, formInstance);
      // @ts-ignore
      const transformedErrors = [];
      // @ts-ignore
      formInstance.setFields(transformedErrors);
    }
  }, [errorsFromBackend, formInstance]);
};

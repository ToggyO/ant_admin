/**
 * Description: Ant message caller
 */

import { message } from 'antd';

import { ANT_MESSAGE_CONTENT, ANT_MESSAGE_KEYS, ERROR_MESSAGES } from '@/constants';

export class AntMessages {
  public static async internalError(duration: number = 5): Promise<void> {
    await message.error({
      duration,
      content: ERROR_MESSAGES.INTERNAL_ERROR,
      key: ANT_MESSAGE_KEYS.INTERNAL_ERROR,
    });
  }

  public static async invalidCredentials(duration: number = 15): Promise<void> {
    await message.error({
      duration,
      content: ERROR_MESSAGES.LOGIN.INVALID_CREDENTIALS,
      key: ANT_MESSAGE_KEYS.LOGIN_ERROR,
    });
  }

  public static async accessDenied(duration: number = 5): Promise<void> {
    await message.error({
      duration,
      content: ERROR_MESSAGES.LOGIN.ACCESS_DENIED,
      key: ANT_MESSAGE_KEYS.ACCESS_DENIED,
    });
  }

  public static async restorePasswordSuccess(email: string, duration: number = 10): Promise<void> {
    await message.success({
      duration,
      content: ANT_MESSAGE_CONTENT.RESTORE_PASSWORD.SUCCESS(email),
      key: ANT_MESSAGE_KEYS.RESTORE_PASSWORD.SUCCESS,
    });
  }

  public static async changePasswordSuccess(duration: number = 5): Promise<void> {
    await message.success({
      duration,
      content: ANT_MESSAGE_CONTENT.CHANGE_PASSWORD.SUCCESS,
      key: ANT_MESSAGE_KEYS.CHANGE_PASSWORD.SUCCESS,
    });
  }

  public static async changePasswordError(duration: number = 5): Promise<void> {
    await message.error({
      duration,
      content: ANT_MESSAGE_CONTENT.CHANGE_PASSWORD.ERROR,
      key: ANT_MESSAGE_KEYS.CHANGE_PASSWORD.ERROR,
    });
  }

  public static async editUserDetailsSuccess(duration: number = 5): Promise<void> {
    await message.success({
      duration,
      content: ANT_MESSAGE_CONTENT.EDIT_USER_PROFILE.SUCCESS,
      key: ANT_MESSAGE_KEYS.EDIT_USER_PROFILE.SUCCESS,
    });
  }

  public static async profileChangesInfo(duration: number = 5): Promise<void> {
    await message.info({
      duration,
      content: ANT_MESSAGE_CONTENT.EDIT_USER_PROFILE.INFO,
      key: ANT_MESSAGE_KEYS.EDIT_USER_PROFILE.INFO,
    });
  }

  public static async invalidFile(content: string, duration: number = 5): Promise<void> {
    await message.warning({
      duration,
      content,
      key: ANT_MESSAGE_KEYS.FILE.INVALID,
    });
  }

  public static async commonMessage(content: string, duration: number = 5): Promise<void> {
    await message.warning({
      duration,
      content,
      key: ANT_MESSAGE_KEYS.FILE.INVALID,
    });
  }
}

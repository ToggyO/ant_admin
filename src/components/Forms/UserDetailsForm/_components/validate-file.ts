import { ACCEPTED_MIME_TYPES, ANT_MESSAGE_CONTENT, MAX_FILE_SIZE } from '@/constants';
import { AntMessages } from 'utils/helpers';

export function validateAvatarFile(file: File): boolean {
  if (file) {
    if (!ACCEPTED_MIME_TYPES.IMAGE.includes(file.type)) {
      AntMessages.invalidFile(ANT_MESSAGE_CONTENT.FILE.TYPE);
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      AntMessages.invalidFile(ANT_MESSAGE_CONTENT.FILE.MAX_SIZE(MAX_FILE_SIZE));
      return false;
    }
    return true;
  }
  return false;
}

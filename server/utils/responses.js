export const error_json_response = (text) => ({ error: text });

export const json_response = (text, extra = {}) => ({ message: text, ...extra });

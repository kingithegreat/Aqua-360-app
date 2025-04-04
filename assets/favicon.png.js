// This file creates a simple favicon.png for the app

const fs = require('fs');
const path = require('path');

// Simple base64 encoded favicon in the app's colors
const faviconBase64 = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFk0lEQVR42r1XW2xURRj+Z87Z7W4vQIstCLRbW0uhUomxCUlJ8IEH1Gji5cFoiDGIPhhN5EFj4IWEEB4wxieiJir64IMxColiYiRqiQQTCQ1K6bbdtrvsdrfdvZ6zZ+b3TCGkUNh2t53kZM7MmZnv/77/NhnzPw9rbY1FZYvLxtLx9KuHjx/a90bvO70HVN/6nluF2fhkO2zY+Ni+qqXJttTVCV1dC+POFA8lNO9Gvgbzl9jL+z5svv/eBzfUzwMYeLnt4vC5C09mJidqpfZW4nxLtplrtdBeHiS08BxQxnzmSEbKSCwUWbZmzUNBOBZO5PvN2Z1PTPiPbLsZwE9PtkciJZEtqHVkaioCz4uQo6NU/gXGRLEqY2ZxMSjg3nQ60d3XG3qpq3OFZsm9LwIQvGdTe+Sh+7c01GxdGs91rNpw7RhyOlPrqvz4pR2PdZO06e7O9qHZcJsHhvd2D5/rHKDdM0tJuOAO9hfAnfuPnnjb9/0dRwZ6R+bR7M5++8zp1I7tO5vqd7TMlLr6Iu7gwF02UcLWA4MnnsvGkh+9tIvXxZeNJYsqdTF0Tpw63NPXH5+aHF9BXueSsZJvW5sbJk3/UFNyZ3ysnjGRNzalfeCv2rKkzMXIadmy1JZt2yZFogiR1WuOSFdJJTRnsrOzE8nx8fkB/Pj8zkj1+tiTTm1dJn1tvMiWlpJ63xhDnluXFFJJKVxHOoZxIkxGCGGt1IyxWZkrwYtlA6uNZ9qXLEm3tm3uPHt0GQZY0Q729wxv+qLl7crYlo0TmavTrpRS+UIoIRgjMYUQTEophBAiEqBDXCghhPa8ElMSS9fP5IyNbmyqi1feVR/uOdw1sKuXuQK/PNcezfrbPmmoba1ctLWs4sSfv9iBAZ9GsYa4l0Joz7NS5IQU2vNKjRSa9CoQGtw2oRYgO75VkdqZd6Zev6Nx9c3+YOYBtG9uihXFG1fU1Tz4gPv3kRlv7OK0o11HM8cZB1dCSqaUEFprToKLoCVLqZkUgnPGjTHeZE//WKQW65xScbTNK66Y7c9uCvDtow+21W16cHlw6uRJm+yfdBjTggu4B84CJZWRSgZCSMM5M0JwrZTkvqctUyI4m8n9O55sL4quqNraVN/RMtc9b8HqQ23Ntc/ctypaMT1Q0vDjSHr8CpcCt09WUFJpzxeB8AItFNcowPi+ZxRLExHI9C87ZI7FIsVFLVsr69sPzLuqrYo2PVZet7QYyVhGn+v6XXhcg9dSG7IgiLgvcxBCGS64oQZV2lUC5jDmC+5jkxHSK/J8a+W6WMPCNXDL5kbZUNtYnO5LS87kRHFizLIAVlLnHCGkFUISEWmkVAHnCnBoo9Vvbsy59f7FxrqGzbsXbMYXLkwu58s9WVFUYqLLF7rlE+MO8hHhxghppVCWc2mEEMFMTvnF/lx2cjKfn5jIeaP9A3pkaGC2vyu/iaPU78mJHiqf5JFwOFRZxaJ+jpU6gL/XlimtrM2B+JzDAPOsDTFrwsZOx+mH7ujXPafGeN/lWV8r3HJJvHj62mh5RUkoFIaRpOB5eaqQk5KoiwDIWh9NQlmLz1TIKvmOnxHM+DXiKdQkHLrtq2jBN3K+MLUbrRzOc8SQXEqJVGtUDRWOIVkuuDREeJ4XR21U0LHzS7+Qa8ow7iOTpQR1HfSxsJkxG6CHGvEUVS3KDwnXZRk91mQcJ0A+E3QEBc5hZCwSdnAVoIsYQ42yOdwxTc4Fga6Cs5LDjw9g9mhGVBK/zQsP9WLxZc6XTLnTHYgWVh0B3QOeRUoiKVAa87h++iGvEn4M4oDWiHbUywxbDJSRQf5H8BkPR/HiiwT0ZTyL0Y/hd4+FfOyvPxMWX9JHaKO94vQQjB3gK4oSG9QjkgM87SPbhXHx2R/EJqcTNz+orQAAAABJRU5ErkJggg==";

// Function to write the file
const createFaviconFile = () => {
  try {
    const faviconPath = path.join(__dirname, 'favicon.png');
    const buffer = Buffer.from(faviconBase64, 'base64');
    fs.writeFileSync(faviconPath, buffer);
    console.log('Favicon created successfully at:', faviconPath);
  } catch (err) {
    console.error('Error creating favicon:', err);
  }
};

// Export for potential future usage
module.exports = {
  createFaviconFile,
  faviconBase64
};

// Run this script to create the favicon
if (require.main === module) {
  createFaviconFile();
}

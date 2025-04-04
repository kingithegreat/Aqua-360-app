# Assets Directory

This directory contains all static assets used in the Aqua 360 app.

## Structure

- `/images` - All image files for the app
  - `/backgrounds` - Background images
  - `/icons` - Icon images
  - `/logos` - Logo variations
  - `/attractions` - Images for various attractions
  - `/profile` - User profile related images

## Usage

### Importing Images

For regular image assets (jpg, png, webp):

```javascript
// Direct require (recommended)
const myImage = require('../../assets/images/backgrounds/water-bg.jpg');

// Use in an Image component
<Image source={myImage} style={styles.image} />
```

### Using Base64 Images

For base64 encoded images:

```javascript
// Import from a JS file
import { myImageBase64 } from '../../assets/images/encoded/my-image';

// Use in an Image component
<Image source={{ uri: myImageBase64 }} style={styles.image} />
```

## Best Practices

1. Keep image files optimized and as small as possible
2. Use appropriate formats (JPEG for photos, PNG for graphics with transparency)
3. Consider providing multiple resolutions for different screen densities
4. Group related images in subfolders
5. Use descriptive filenames

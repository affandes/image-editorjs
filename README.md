# Image Plugin for EditorJs

Enable your EditorJS to embed an image. 

## Credits

Created with ❤ by Muhammad Affandes

## Installation

### With package manager NPM or Yarn

Run following command to install plugins.

```bash
npm install image-editorjs
```

Or 

```bash
yarn add image-editorjs
```

### Load via CDN

Place following line at the end of your HTML body tag.

```html
...
<script src="https://cdn.jsdelivr.net/npm/image-editorjs"></script>
...
```

## Usage

Insert following snippets to your EditorJs configuration object.

```javascript
import EditorJS from "@editorjs/editorjs";
import ImageEditor from "./katex-editor"

// Your EditorJs init
const editorjs = new EditorJS({
    // ...
    tools: {
        image: {
            class: ImageEditor
        },
    },
    // ...
});

```

## Config Params

| Params          | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `placeholder` | **String**. (*Optional*) Your placeholder |

## Output Data

Image will be wrapped with `div` tag with `.aff-image-wrapper` class.

```json
{
    "type": "image",
    "data": {
        "url": "https://domain.com/images/file/url.jpg",
        "caption": "Your caption here..."
    }
}
```


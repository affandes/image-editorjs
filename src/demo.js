import EditorJS from "@editorjs/editorjs";
import ImageEditor from "./image-editor";
import '@fortawesome/fontawesome-free/css/all.min.css';

const editorjs = new EditorJS({
    autofocus: false,
    tools: {
        image: {
            class: ImageEditor,
            config: {
                urlPatterns: [
                    /(https:\/\/pixabay.com.*?.(jpg|png|gif|svg))/g
                ]
            }
        },
    },
    placeholder: 'Ketik disini...',
    data: {
        "time": 1582085862578,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "This is an Image"
                }
            },
            {
                "type": "image",
                "data": {
                    "url": "https://symfony.com/images/logos/header-logo.svg",
                    "caption": "Your caption here...",
                    "align": "center"
                }
            }
        ],
        "version": "2.16.1"
    }
});

document.getElementById('save').onclick = function () {
    editorjs.save().then((outputData) => {
        console.log('Output: ', outputData)
    }).catch((error) => {
        console.log('Error: ', error);
    });
};
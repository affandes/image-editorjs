import EditorJS from "@editorjs/editorjs";
import ImageEditor from "./image-editor";

const editorjs = new EditorJS({
    autofocus: false,
    tools: {
        image: {
            class: ImageEditor
        },
    },
    placeholder: 'Ketik disini...',
    data: {}
});

document.getElementById('save').onclick = function () {
    editorjs.save().then((outputData) => {
        console.log('Output: ', outputData)
    }).catch((error) => {
        console.log('Error: ', error);
    });
};
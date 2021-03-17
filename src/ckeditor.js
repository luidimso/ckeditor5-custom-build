/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Emoji from '@wwalc/ckeditor5-emoji/src/emoji';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Link from '@ckeditor/ckeditor5-link/src/link.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Bold,
	Essentials,
	FontColor,
	FontFamily,
	Heading,
	Italic,
	Paragraph,
	Underline,
	Emoji,
	EasyImage,
	Base64UploadAdapter,
	Link
];

export default Editor;
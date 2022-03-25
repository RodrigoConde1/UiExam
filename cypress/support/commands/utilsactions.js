/// <reference types="cypress"/>

class TextBoxACtions{

splitField($text ){
    var splitText = $text.split(":");
    return splitText
    }
}

export default TextBoxACtions
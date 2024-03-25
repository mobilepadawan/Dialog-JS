# Dialog-JS library
Dialog-JS is a lightweight JavaScript library for creating customizable dialog boxes to replace standard JavaScript dialogs (alert, prompt, confirm) with more flexible and styled options. It provides easy-to-use methods to create dialogs with custom titles, messages, buttons, and callbacks.

Dialog-JS also allows developers to integrate their own CSS styles to customize the appearance of the dialogs according to their project needs.

Please visit [Dialog-JS website](https://mobilepadawan.github.io/Dialog-js/) for a quick testing.

## Table of Contents
1) [Setup the library](#setup-the-library)
    * [Dialog Alert](#dialogalert)
    * [Dialog Confirm](#dialogconfirm)
    * [Dialog Prompt](#dialogprompt)
2) [Styles](#styles)
3) [About](#about)

### Setup the library
To use `Dialog-JS` in your project, you can simply include the `Dialog-JS.1.0.0.min.js` and `dialogjs-default-1.0.0.min.css` files in your HTML file as part of the `<head>` HTML document section. Remember to fix the route of the files in the path.

```HTML
<script src="Dialog-JS.1.0.0.min.js"></script>
<link rel="stylesheet" href="dialogjs-default-1.0.0.min.css">
```


### Dialog.alert()
Create an alert dialog with a custom title, message, and button text by passing a literal object with each property expected. Do not forget to declare any property.

```javascript
Dialog.alert({
  title: "Alert",
  text: "This is an alert message.",
  buttonText: "OK"
});
```

### Dialog.confirm()
Create a confirmation dialog with a custom title, message, and the text of the buttons for confirmation and cancellation. You can also specify a callback function to execute when the confirmation button is clicked.

```javascript
Dialog.confirm({
  title: "Confirmation",
  text: "Are you sure you want to proceed?",
  defaultButtonText: "Yes",
  cancelButtonText: "No",
  callBackFn: () => {
    // Code to execute on confirmation
    console.log("Confirmed");
  }
});
```

### Dialog.prompt()

Create a prompt dialog with a custom title, message, input placeholder, and buttons for confirmation and cancellation. You can also specify a callback function to receive the input value when confirmed.

```javascript
Dialog.prompt({
  title: "Prompt",
  text: "Please enter your name:",
  placeholderInput: "Your Name",
  confirmButtonText: "Submit",
  cancelButtonText: "Cancel",
  callBackFn: (inputValue) => {
    // Code to execute with input value
    console.log("Submitted: ", inputValue);
  }
});
```

## Styles
The CSS file linked to this JS library has a couple of alternatives to implement with the Dialog windows CSS styles similar to another frameworks or operating systems.
* `dialogjs-bootstrap-1.0.0.min.css`
* `dialogjs-material-1.0.0.min.css`
* `dialogjs-ios-1.0.0.min.css`

## About

Dialog-JS is a simple yet effective JavaScript library developed by `Fernando Omar Luna 🇦🇷`. It aims to provide developers with an easy way to create customizable dialog boxes for their web projects. 

Feel free to follow Fernando on (X) **[@mobilepadawan](https://www.x.com/mobilepadawan)** to say hi or send feedback about Dialog-JS.


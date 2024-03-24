# Dialog-JS library
Dialog-JS is a lightweight JavaScript library for creating customizable dialog boxes to replace standard JavaScript dialogs (alert, prompt, confirm) with more flexible and styled options. It provides easy-to-use methods to create dialogs with custom titles, messages, buttons, and callbacks.

Dialog-JS also allows developers to integrate their own CSS styles to customize the appearance of the dialogs according to their project needs.

## Table of Contents
1) [Setup the library](#setup-the-library)
    * [Hands on](#hands-on)
    * [Dialog Alert](#dialog-alert)
    * [Dialog Confirm](#dialog-confirm)
    * [Dialog Prompt](#dialog-prompt)
2) [About](#about)

### Setup the library
To use `Dialog-JS` in your project, you can simply include the `dialog.js` and `dialog.css` files in your HTML file as part of the `<head>` HTML document section. Remember to fix the route of the files in the path.

```HTML
<script src="dialog.js"></script>
<link rel="stylesheet" href="dialog.css">
```

### Hands on

#### Dialog.alert()
Create an alert dialog with a custom title, message, and button text by passing a literal object with each property expected. Do not forget to declare any property.

```javascript
Dialog.alert({
  title: "Alert",
  text: "This is an alert message.",
  buttonText: "OK"
});
```

#### Dialog.confirm()
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

#### Dialog.prompt()
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

## About
Dialog-JS is a simple yet effective JavaScript library developed by `Fernando Omar Luna 🇦🇷`. It aims to provide developers with an easy way to create customizable dialog boxes for their web projects. 

Feel free to follow Fernando on (X) **[@mobilepadawan](https://www.x.com/mobilepadawan)** to say hi or send feedback about Dialog-JS.

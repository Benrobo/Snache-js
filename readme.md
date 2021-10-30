<p align="center">
<img src="https://raw.githubusercontent.com/Benrobo/Snache-js/main/lib/img/logo.png">
</p>

### Snache-js
### 🎉 A minimalist , intuitive javascript based notification toast library.

### ✔ Getting Started

Installing Snackbrr is as easy as...

```html
<script type="text/javascript" src="https://unpkg.com/snachejs@1.0.2/lib/js/snache.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/snachejs@1.0.2/lib/css/snache.css" />
```

### 💎 Initializing Snackbrr

Snache-js can be initialize by creating an instance of snackbrr and calling the <code>init</code> method on the instance

```html
<script>
  new SnackBar(<configs>).init()
</script>
```

### 👌 Configuring Snache-js

Snache-js requires a config parameter. the below code shows you how to configure Snache-js..

```javascript

// initialize snackbar

let snackbar = new SnackBar({
  showIcon: `<Boolean>` // If you wanna show a icon, make this true orderwise false,
  iconName: `<string>` //Snache-js uses fontawesome icons by default,just provide the fontawesome-icon names,
  snackbarText: `<String>`, //The Snache-js text,
  snackbarTextColor: `<String>` // the color of the snackbar text,
  snackbarBg: `<String | color names>` //change the snackbar background,
  iconColor: `<String>`, //snackbar icon color (red, #0000, rgb(0,255,0)),
  visibility: `<boolean>`, //true | false, this would hide the Snache-js element when turned true,
  actionText: `<String>`, //the action element inner text for eg Button,
  action: `<Boolean>`, // If you wanna show a action button, make this true orderwise false,
  handler: () => {
    // your handler functon here
    document.querySelector(".snackbar").style.display = "none";
  },
})

snackbar.show();
```

❤ And that it, Snache-js is ready to be used.

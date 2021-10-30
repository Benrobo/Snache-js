let snackbar;
let btn1 = document.querySelector(".btn-default");
let btn2 = document.querySelector(".btn-showicon");
let btn3 = document.querySelector(".btn-icon-action-button");
let btn4 = document.querySelector(".btn-changebg");

btn1.onclick = () => {
    snackbar = new SnackBar({
        visibility: true,
        snackbarText: "Something went wrong"
    })

    snackbar.show()

    setTimeout(() => {
        snackbar.hide()
    }, 2000);
}

btn2.onclick = () => {
    snackbar = new SnackBar({
        showIcon: true,
        iconName: "bug",
        visibility: true,
        snackbarText: "Something went wrong",
        visibility: true,
        snackbarText: "Something went wrong"
    })

    snackbar.show()

    setTimeout(() => {
        snackbar.hide()
    }, 2000);
}

btn3.onclick = () => {
    snackbar = new SnackBar({
        showIcon: true,
        iconName: "bug",
        visibility: true,
        snackbarText: "Something went wrong",
        visibility: true,
        snackbarText: "Something went wrong",
        actionText: "cancel",
        action: true,
        handler: () => {
            snackbar.hide()
        }
    })

    snackbar.show()
}

btn4.onclick = () => {
    snackbar = new SnackBar({
        showIcon: true,
        iconName: "bug",
        snackbarBg: "red",
        visibility: true,
        visibility: true,
        snackbarText: "Something went wrong",
        actionText: "cancel",
        action: true,
        handler: () => {
            snackbar.hide()
        }
    })

    snackbar.show()
}



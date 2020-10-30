
export class SendMessagePlugin {
    constructor({ selectorForm, selectorResult }) {
        this.formRef = document.querySelector(selectorForm)
        this.resultRef = document.querySelector(selectorResult)
        this._bindEvent();
    }

    _bindEvent() {
        this.formRef.addEventListener('submit', this._handlerSubmitForm.bind(this))
    }

    _handlerSubmitForm(event) {
        event.preventDefault();
        const formData = new FormData(this.formRef);
        const messageObj = {
            userName: formData.get('username'),
            userEmail: formData.get('usermail'),
            userMessage: formData.get('usermessage'),
        }
        this._serverConect(messageObj)
    }

    _serverConect(messageObj) {
        const message = JSON.stringify(messageObj);
        const serverOptions = {
            method: 'POST',
            body: message,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('https://my-resume-users.firebaseio.com/my-resume-users.json', serverOptions).then(resolve => resolve.json()).then(data => {

            this.resultRef.innerHTML = '<p>Message submit!</p>'
            this.formRef.reset();

        }).catch(eror => {
            console.log(eror)
            this.resultRef.innerHTML = '<p>Eror,message dont submit</p>'
        })
    }



}
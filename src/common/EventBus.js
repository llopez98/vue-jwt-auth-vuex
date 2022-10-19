/*
– on() method attachs an EventListener to the document object. The callback will be called when the event gets fired.
– dispatch() method fires an event using the CustomEvent API.
– remove() method removes the attached event from the document object.
*/

const eventBus = {
    on(event, callback){
        document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event, data){
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event, callback){
        document.removeEventListener(event, callback);
    }
};

export default eventBus;
import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    };
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    };
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    };
}

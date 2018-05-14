import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    THUMB_DOWN_COMMENT,
    THUMB_UP_COMMENT
} from 'actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            },
            ...state.comments];
        case EDIT_COMMENT:
            return state.comments.map(comment => {
                if (comment.id === action.id) {
                    return Object.assign({}, comment, {
                        id: comment.id,
                        text: action.text,
                        votes: comment.votes
                    });
                }
                return comment;
            });
        case REMOVE_COMMENT:
            return state.comments.filter(
                comment => comment.id !== action.id
            );
        case THUMB_DOWN_COMMENT:
            return state.comments.map(comment => {
                if (comment.id === action.id) {
                    return Object.assign({}, comment, {
                        id: comment.id,
                        text: comment.text,
                        votes: comment.votes - 1
                    });
                }
                return comment;
            });
        case THUMB_UP_COMMENT:
            return state.comments.map(comment => {
                if (comment.id === action.id) {
                    return Object.assign({}, comment, {
                        id: comment.id,
                        text: comment.text,
                        votes: comment.votes + 1
                    });
                }
                return comment;
            });
        default:
            return state;
    }
}

export default comments;

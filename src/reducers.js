import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    THUMB_DOWN_COMMENT,
    THUMB_UP_COMMENT
} from 'actions';

const initialState = {
    comments: [],
    users: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    },
                    ...state
                ]
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    state.comments.filter(
                        comment => comment.id !== action.id
                    ),
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                ]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(
                    comment => comment.id !== action.id
                )
            });
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map((comment, id) => {
                    if (id === action.id) {
                        return Object.assign({}, comment, {
                            id: comment.id,
                            text: comment.text,
                            votes: comment.votes - 1
                        });
                    }
                    return comment;
                })
            });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map((comment, id) => {
                    if (id === action.id) {
                        return Object.assign({}, comment, {
                            id: comment.id,
                            text: comment.text,
                            votes: comment.votes + 1
                        });
                    }
                    return comment;
                })
            });
        default:
            return state;
    }
}

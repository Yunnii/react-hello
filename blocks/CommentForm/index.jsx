var b = require('b_').with('commentForm');

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className={b()}>
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

module.exports = CommentForm;
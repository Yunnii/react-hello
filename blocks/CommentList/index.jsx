var b = require('b_').with('commentList');
var Comment = require('Comment');

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment, i) {
            return (
                <Comment author={comment.author} text = {comment.text} key={i}>
                </Comment>
            );
        });
        return (
            <div className={b()}>
                {commentNodes}
            </div>
        );
    }
});

module.exports = CommentList;
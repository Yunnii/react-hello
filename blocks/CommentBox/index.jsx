var b = require('b_').with('commentbox');
var CommentList = require('CommentList');
var CommentForm = require('CommentForm');

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className={b()}>
                {__("default.title")}
                <h1 className={b("title")}>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});

module.exports = CommentBox;
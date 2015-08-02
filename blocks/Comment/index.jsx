var b = require('b_').with('comment');

var Comment = React.createClass({
    render: function() {
        return (
            <div className={b()}>
                <h2 className={b('author')}>
                    {this.props.author}
                </h2>
                    {this.props.text}
            </div>
        );
    }
});

module.exports = Comment;
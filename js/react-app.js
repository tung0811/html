/**
 * Created by phongbd on 3/18/16.
 */

// Main component, display home page
var HomePage = React.createClass({
    render: function() {
        return (
            <div>
                {/* Include header */}
                <Header/>
                {/* Top list categories */}
                <TopCategory items={this.props.topCategories} />
                {/* Home slider */}
                <div className="top-slider">
                    <HomeSlider items={this.props.slides}/>
                    <div className="container"><div className="slider-pager"></div></div>
                </div>
                {/* List new items */}
                <div className="container">
                    <ListHomeProduct items={this.props.newProducts}/>
                    {/* List items ranking */}
                    <ListHomeProduct items={this.props.rankProducts}/>
                    {/* Show footer category */}
                    <FooterCategory items={this.props.footerCategories} />
                    <FooterNav items={this.props.footerNav}/>
                    <div className="social-links">
                        <a href="#" title="" className="social-link"><i className="sprite icon-b"></i></a>
                        <a href="#" title="" className="social-link"><i className="sprite icon-twitter"></i></a>
                        <a href="#" title="" className="social-link"><i className="sprite icon-facebook"></i></a>
                        <a href="#" title="" className="social-link"><i className="sprite icon-google"></i></a>
                        <a href="#" title="" className="social-link"><i className="sprite icon-v"></i></a>
                        <a href="#" title="" className="social-link"><i className="sprite icon-line"></i></a>
                    </div>
                    <FooterLinks items={this.props.footerLinks}/>
                    <div className="copyright">Copyright © VAVS Inc. All Rights Reserved.</div>
                    <a href="#" title="Goto Top" className="goto-top"><i className="sprite icon-move-top"></i></a>
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
            <div className="container">
            <div className="main-nav"><i className="sprite icon-nav"></i></div>
            <h1 className="header-text"><img src="img/logo.png"/></h1>
            <div className="top-search"><i className="sprite icon-search"></i></div>
            <div className="clear"></div>
            </div>
            </div>
        );
    }
});

// Create top category
var TopCategory = React.createClass({
    // Set state focus:
    getInitialState: function(){
        return { focused: 0 };
    },

    // Click event, active menu
    clicked: function(index){
        // Set state focus
        this.setState({ focused: index})
    },

    // Render menu
    render: function() {
        var self = this;
        // map method, loop the array of categories
        return (
            <div className="top-nav active">
                <div className="container">
                    { this.props.items.map(function(m, index){
                        // Check item active
                        var itemClass = '';
                        if(self.state.focused == index){
                            itemClass = 'active';
                        }

                        // Return html item
                        return <a className={itemClass} onClick={self.clicked.bind(self, index)} key={index}>{m}</a>
                    })}
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
});

// Home slider
var HomeSlider = React.createClass({
    // start slide after render
    componentDidMount: function () {
        $('.home-slider').cycle();
    },
    render: function(){
        // Loop list image for slider
        return (
            <div className="home-slider cycle-slideshow" data-cycle-center-horz="true" data-cycle-auto-height="false" data-cycle-pager=".slider-pager" data-cycle-speed="1500">
                { this.props.items.map(function(m, index){
                    // return image
                    return <img src={m} key={index}/>
                })}
            </div>
        );
    }
});

// List products
var ListHomeProduct = React.createClass({
    render: function(){
        // loop list product
        return (
            <div className="box-content-wrapper">
                <div className="box-title">
                    <h2>{this.props.items.title}</h2>
                </div>
                <div className="box-content">
                    { this.props.items.products.map(function(p, index){
                        return <div className="product-wrapper" key={index}>
                                    <a href="#" title="{p.name}" className="product-img">
                                        <img src={p.image} alt={p.name}/>
                                        <i className="sprite icon-new-product"></i>
                                    </a>
                                    <div className="product-info">
                                        <a href="#product-link" title={p.name} className="product-title">{p.name}</a>
                                        <span className="product-short-desc">{p.author}</span>
                                        <span className="product-price">{p.price}</span>
                                        <div className="product-tools">
                                            <span className="product-vote">
                                                <span className="vote-star-wrap">
                                                    <form action="">
                                                        <input className="star star-5" type="radio" name="star"/>
                                                        <label className="star star-5"></label>
                                                        <input className="star star-4" type="radio" name="star" checked/>
                                                        <label className="star star-4"></label>
                                                        <input className="star star-3" type="radio" name="star"/>
                                                        <label className="star star-3"></label>
                                                        <input className="star star-2" type="radio" name="star"/>
                                                        <label className="star star-2"></label>
                                                        <input className="star star-1" type="radio" name="star"/>
                                                        <label className="star star-1"></label>
                                                    </form>
                                                </span>
                                                <span className="text-wrap vote-count">({p.vote})</span>
                                            </span>
                                            <span className="product-like">
                                                <i className="sprite icon-like active"></i>
                                                <span className="text-wrap like-count">{p.like}</span>
                                            </span>
                                            <a href="#product-link" className="product-view-more" title="Product name">View more</a>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                    })}
                </div>
            </div>
        );
    }
});

// Show footer category
var FooterCategory = React.createClass({
    render: function(){
        return (
            <div className="box-content-wrapper">
                <div className="box-title">
                    <h2>Category</h2>
                </div>
                <div className="footer-category-nav">
                    <ul>
                        { this.props.items.map(function(m, index){
                            return <li key={index}><a href="" title={m}>{m} <i className="sprite icon-arrow"></i></a></li>
                        })}
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
});
// Show footer navigation
var FooterNav = React.createClass({
    render: function(){
        return (
            <div className="footer-nav">
                <ul>
                    { this.props.items.map(function(v, index){
                        return <li key={index}><a href="#" title={v}>{v}</a></li>
                    })}
                </ul>
                <div className="clear"></div>
            </div>
        )
    }
});

// Show footer social icons
var FooterLinks = React.createClass({
    render: function(){
        return (
            <div className="footer-links">
                <ul>
                    { this.props.items.map(function(v, index){
                        return <li key={index}><a href="#" title={v}>{v}</a></li>
                    })}
                </ul>
                <div className="clear"></div>
            </div>
        )
    }
});

// List new products
var listNewItems = {
    title: 'New Items',
    products: [
        { name: 'BEST Quality Vitamin C Serum For Face', author: 'Shisedo', price: '$65.00', image: 'images/product-10.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Dolore Ipsum Styuaserta', author: 'Shisedo', price: '$65.00', image: 'images/product-9.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Coconoil Certified Virgin Organic Coconut Oil', author: 'Shisedo', price: '$65.00', image: 'images/product-8.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Metuyasas Bertyasera Kertuytas', author: 'Shisedo', price: '$65.00', image: 'images/product-7.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Eminence Strawberry Rhubarb Dermafoliant, 4.2 Ounce', author: 'Shisedo', price: '$65.00', image: 'images/product-6.jpg', vote_point: 4, vote: 200, like: 287, liked: true}
    ]
};

// List rank products
var listRankItems = {
    title: 'Items Ranking',
    products: [
        { name: 'Gravida atcursus', author: 'Shisedo', price: '$65.00', image: 'images/product-5.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Ridiculus mus', author: 'Shisedo', price: '$65.00', image: 'images/product-4.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Coconoil Certified Virgin Organic Coconut Oil', author: 'Shisedo', price: '$65.00', image: 'images/product-3.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Metuyasas Bertyasera Kertuytas', author: 'Shisedo', price: '$65.00', image: 'images/product-2.jpg', vote_point: 4, vote: 200, like: 287, liked: true},
        { name: 'Eminence Strawberry Rhubarb Dermafoliant, 4.2 Ounce', author: 'Shisedo', price: '$65.00', image: 'images/product-1.jpg', vote_point: 4, vote: 200, like: 287, liked: true}
    ]
};

// Render top category menu
ReactDOM.render(
    <HomePage
        topCategories = {[ 'Ranking', 'Category', 'Brand' ]}
        slides = {[ 'images/slider-1.jpg', 'images/slider-2.jpg', 'images/slider-1.jpg' ]}
        newProducts = {listNewItems}
        rankProducts = {listRankItems}
        footerCategories = {[ 'Skin Care', 'Base Makeup', 'Brushes & Tools', 'Body Care' ]}
        footerNav = {[ 'Home', 'Ranking', 'Category', 'Brand' ]}
        footerLinks = {[ 'Terms', 'Privacy', 'Contact Us', 'Company' ]}
    />,
    document.getElementById('main-container')
);
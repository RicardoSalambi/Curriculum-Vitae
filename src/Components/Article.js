import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import './Article.css'

class Article extends Component{
    render(){
        return(
            <div className="all">
                <div className="ArticleImage">
                    <img className="article1" src={require('../img/Article1.PNG')} />
                    <img src={require('../img/Article2.PNG')} />                            
                </div>
                <div className="button">
                    <Button variant="contained"> 
                        <Link  href="https://www.cput.ac.za/newsroom/news/article/3510/waterless-car-wash-wins-water-pitch-challenge" color="primary">
                            Click to view Original Article
                        </Link >
                    </Button>
                </div>
            </div>
            
        );
    }
}

export default Article;
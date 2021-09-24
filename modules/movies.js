const axios = require('axios');

const express = require('express');

function movieHandler(req, res){
    let searchQuery = req.query.query

    let movieUrl =  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${searchQuery}`
//    console.log(searchQuery);
//    console.log(movieUrl);

    axios 
    .get(movieUrl)
    .then(result =>{
    

            let img = 'https://image.tmdb.org/t/p/w500';
            let movieArr = result.data.results.map(element =>{
            
                let avatar = element.poster_path?img+element.poster_path:'https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black.png'
                
                return new Movie(element.title, avatar, element.vote_average);
            })
            res.send(movieArr)
            
    
        }).catch(error=>{
            res.send(error)
        })
    
    
    }

    class Movie {
        constructor(title,img,rate){
                this.title = title;

                this.img = img;

                this.rate = rate;
        }
    }



    module.exports = movieHandler;
import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My posts
            <div className={s.newPost}>
                <textarea></textarea>
                <button>ADD POST</button>
            </div>
            <Post message='Hi, how are you?' count={5}/>
            <Post message="It's my first post" count={7}/>
        </div>
    )
}
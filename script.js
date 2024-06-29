// Select DOM elements
const showModalBtn = document.querySelectorAll(".post-list li .pa button:nth-child(2)");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");
const close_icon=document.querySelector(".ci2")
const open_icon=document.querySelector(".ci1")
const nav_app =document.querySelector(".plus-icon")
const point =document.querySelector(".point")
let fetch_programmer=false;
point.addEventListener("click",(e)=>{
    e.target.classList.toggle("nnn")
    document.body.classList.toggle("switch")
    if (document.querySelector(".point").classList.contains("nnn")){
        setTimeout(()=>{
            console.log("fetch tech posts")
            document.querySelector(".post-list").innerHTML=`
                            <li style="z-index: 2;">
                                <div class="header">
                                    <div class="profile-picture"></div>
                                    <div class="bio">
                                        <div class="user-d"><p class="user" style=" font-weight: 500;">David Erimusk</p></div>
                                        <p style="font-size: small; color: #888; line-height: 20px;">@reactions24346 &nbsp; 23 hrs ago</p>
                                    </div>
                                    <span class="elipisis-holder"><i class="uil uil-ellipsis-v" style="color: var(--text2);"></i><div class="icon-nav">
                                            
                                            <ul class="icon-nav-hold">
                                                <li><span class="icon-hold"><i class="uil uil-user-plus" style="font-size: 20px;"></i></span>Follow @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i class="fa-solid fa-user-plus"></i></span>Add Friend</li>
                                                <li><span class="icon-hold"><i class="uil uil-ban" style="font-size: 20px;"></i></span>Block @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><svg fill="#4070f4" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-1q142lx"><g><path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"></path></g></svg></span>Mute @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i style='font-size: 20px;' class="uil uil-question-circle"></i></span>Report Post</li>
                                                <li><span class="icon-hold"><i class="fa-regular fa-flag"></i></span>Save Post</li>
                                                <li><span class="icon-hold"><i class="uil uil-message"></i></span>Message Abraham Emmanuel</li>
                                            </ul>
                                            
                                        </div></span>
                                </div>
                                <div class="about">
                                    <p>Just launched this new redux boiler plate code <br><br>  Just plain and easy</p>
                                </div>
                                <div class="the-post" style="position: relative; display: flex; justify-content: center;" >
                                    <div class="code">
                                        <div class="code-head">
                                            <button>Javascript</button>
                                            <div class="code-stuff">
                                                <div class="copy">
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editor">
                                            <div class="line">
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>{&nbsp;combineReducers&nbsp;}<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"reduxjs/toolkit"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>yourSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./yourSlice"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>anyOtherSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./anyOtherSlice"</code><br><br>
                                                <code style="color: skyblue;">const&nbsp;&nbsp;</code>reducer&nbsp;&nbsp;<code style="color:  rgb(223, 123, 223);">=&nbsp;&nbsp;</code><code style="color: rgb(223, 123, 223);">combineReducers</code>({<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yourStateKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>yourSlice,<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;anyOthersliceKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>anyOtherSlice
                                                <br>}) <br>
                                                <code style="color: skyblue;">export&nbsp;&nbsp;</code><code style="color: skyblue;">default&nbsp;&nbsp;</code>reducer
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="reactions">
                                    <div class="pa">
                                        <button class="span button" style="position: relative;"><i class="fa-regular fa-heart" style="color: #f4144c;"></i>&nbsp;<p>2.5k</p></button>
                                        <button class="span"><i class='bx bx-comment-dots' style='color:#2f80ed' ></i>&nbsp;<p>1.5k</p></button>
                                        <button class="span"><i class="fa-solid fa-share i3"></i>&nbsp;<p>450</p></button>
                                        <button class="span"><i class="fa-regular fa-flag i4"></i></button>
                                        <button class="span"><i class="fa-solid fa-upload i5"></i></button>
                                    </div>
                                   
                                </div>
                                
                            </li>
                            <li style="z-index: 2;">
                                <div class="header">
                                    <div class="profile-picture"></div>
                                    <div class="bio">
                                        <div class="user-d"><p class="user" style=" font-weight: 500;">David Erimusk</p></div>
                                        <p style="font-size: small; color: #888; line-height: 20px;">@reactions24346 &nbsp; 23 hrs ago</p>
                                    </div>
                                    <span class="elipisis-holder"><i class="uil uil-ellipsis-v" style="color: var(--text2);"></i><div class="icon-nav">
                                            
                                            <ul class="icon-nav-hold">
                                                <li><span class="icon-hold"><i class="uil uil-user-plus" style="font-size: 20px;"></i></span>Follow @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i class="fa-solid fa-user-plus"></i></span>Add Friend</li>
                                                <li><span class="icon-hold"><i class="uil uil-ban" style="font-size: 20px;"></i></span>Block @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><svg fill="#4070f4" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-1q142lx"><g><path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"></path></g></svg></span>Mute @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i style='font-size: 20px;' class="uil uil-question-circle"></i></span>Report Post</li>
                                                <li><span class="icon-hold"><i class="fa-regular fa-flag"></i></span>Save Post</li>
                                                <li><span class="icon-hold"><i class="uil uil-message"></i></span>Message Abraham Emmanuel</li>
                                            </ul>
                                            
                                        </div></span>
                                </div>
                                <div class="about">
                                    <p>Just launched this new redux boiler plate code <br><br>  Just plain and easy</p>
                                </div>
                                <div class="the-post" style="position: relative; display: flex; justify-content: center;" >
                                    <div class="code">
                                        <div class="code-head">
                                            <button>Javascript</button>
                                            <div class="code-stuff">
                                                <div class="copy">
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editor">
                                            <div class="line">
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>{&nbsp;combineReducers&nbsp;}<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"reduxjs/toolkit"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>yourSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./yourSlice"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>anyOtherSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./anyOtherSlice"</code><br><br>
                                                <code style="color: skyblue;">const&nbsp;&nbsp;</code>reducer&nbsp;&nbsp;<code style="color:  rgb(223, 123, 223);">=&nbsp;&nbsp;</code><code style="color: rgb(223, 123, 223);">combineReducers</code>({<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yourStateKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>yourSlice,<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;anyOthersliceKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>anyOtherSlice
                                                <br>}) <br>
                                                <code style="color: skyblue;">export&nbsp;&nbsp;</code><code style="color: skyblue;">default&nbsp;&nbsp;</code>reducer
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="reactions">
                                    <div class="pa">
                                        <button class="span button" style="position: relative;"><i class="fa-regular fa-heart" style="color: #f4144c;"></i>&nbsp;<p>2.5k</p></button>
                                        <button class="span"><i class='bx bx-comment-dots' style='color:#2f80ed' ></i>&nbsp;<p>1.5k</p></button>
                                        <button class="span"><i class="fa-solid fa-share i3"></i>&nbsp;<p>450</p></button>
                                        <button class="span"><i class="fa-regular fa-flag i4"></i></button>
                                        <button class="span"><i class="fa-solid fa-upload i5"></i></button>
                                    </div>
                                   
                                </div>
                                
                            </li>
                            <li style="z-index: 2;">
                                <div class="header">
                                    <div class="profile-picture"></div>
                                    <div class="bio">
                                        <div class="user-d"><p class="user" style=" font-weight: 500;">David Erimusk</p></div>
                                        <p style="font-size: small; color: #888; line-height: 20px;">@reactions24346 &nbsp; 23 hrs ago</p>
                                    </div>
                                    <span class="elipisis-holder"><i class="uil uil-ellipsis-v" style="color: var(--text2);"></i><div class="icon-nav">
                                            
                                            <ul class="icon-nav-hold">
                                                <li><span class="icon-hold"><i class="uil uil-user-plus" style="font-size: 20px;"></i></span>Follow @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i class="fa-solid fa-user-plus"></i></span>Add Friend</li>
                                                <li><span class="icon-hold"><i class="uil uil-ban" style="font-size: 20px;"></i></span>Block @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><svg fill="#4070f4" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-1q142lx"><g><path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"></path></g></svg></span>Mute @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i style='font-size: 20px;' class="uil uil-question-circle"></i></span>Report Post</li>
                                                <li><span class="icon-hold"><i class="fa-regular fa-flag"></i></span>Save Post</li>
                                                <li><span class="icon-hold"><i class="uil uil-message"></i></span>Message Abraham Emmanuel</li>
                                            </ul>
                                            
                                        </div></span>
                                </div>
                                <div class="about">
                                    <p>Just launched this new redux boiler plate code <br><br>  Just plain and easy</p>
                                </div>
                                <div class="the-post" style="position: relative; display: flex; justify-content: center;" >
                                    <div class="code">
                                        <div class="code-head">
                                            <button>Javascript</button>
                                            <div class="code-stuff">
                                                <div class="copy">
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editor">
                                            <div class="line">
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>{&nbsp;combineReducers&nbsp;}<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"reduxjs/toolkit"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>yourSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./yourSlice"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>anyOtherSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./anyOtherSlice"</code><br><br>
                                                <code style="color: skyblue;">const&nbsp;&nbsp;</code>reducer&nbsp;&nbsp;<code style="color:  rgb(223, 123, 223);">=&nbsp;&nbsp;</code><code style="color: rgb(223, 123, 223);">combineReducers</code>({<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yourStateKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>yourSlice,<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;anyOthersliceKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>anyOtherSlice
                                                <br>}) <br>
                                                <code style="color: skyblue;">export&nbsp;&nbsp;</code><code style="color: skyblue;">default&nbsp;&nbsp;</code>reducer
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="reactions">
                                    <div class="pa">
                                        <button class="span button" style="position: relative;"><i class="fa-regular fa-heart" style="color: #f4144c;"></i>&nbsp;<p>2.5k</p></button>
                                        <button class="span"><i class='bx bx-comment-dots' style='color:#2f80ed' ></i>&nbsp;<p>1.5k</p></button>
                                        <button class="span"><i class="fa-solid fa-share i3"></i>&nbsp;<p>450</p></button>
                                        <button class="span"><i class="fa-regular fa-flag i4"></i></button>
                                        <button class="span"><i class="fa-solid fa-upload i5"></i></button>
                                    </div>
                                   
                                </div>
                                
                            </li>
                            <li style="z-index: 2;">
                                <div class="header">
                                    <div class="profile-picture"></div>
                                    <div class="bio">
                                        <div class="user-d"><p class="user" style=" font-weight: 500;">David Erimusk</p></div>
                                        <p style="font-size: small; color: #888; line-height: 20px;">@reactions24346 &nbsp; 23 hrs ago</p>
                                    </div>
                                    <span class="elipisis-holder"><i class="uil uil-ellipsis-v" style="color: var(--text2);"></i><div class="icon-nav">
                                            
                                            <ul class="icon-nav-hold">
                                                <li><span class="icon-hold"><i class="uil uil-user-plus" style="font-size: 20px;"></i></span>Follow @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i class="fa-solid fa-user-plus"></i></span>Add Friend</li>
                                                <li><span class="icon-hold"><i class="uil uil-ban" style="font-size: 20px;"></i></span>Block @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><svg fill="#4070f4" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-1q142lx"><g><path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"></path></g></svg></span>Mute @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i style='font-size: 20px;' class="uil uil-question-circle"></i></span>Report Post</li>
                                                <li><span class="icon-hold"><i class="fa-regular fa-flag"></i></span>Save Post</li>
                                                <li><span class="icon-hold"><i class="uil uil-message"></i></span>Message Abraham Emmanuel</li>
                                            </ul>
                                            
                                        </div></span>
                                </div>
                                <div class="about">
                                    <p>Just launched this new redux boiler plate code <br><br>  Just plain and easy</p>
                                </div>
                                <div class="the-post" style="position: relative; display: flex; justify-content: center;" >
                                    <div class="code">
                                        <div class="code-head">
                                            <button>Javascript</button>
                                            <div class="code-stuff">
                                                <div class="copy">
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editor">
                                            <div class="line">
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>{&nbsp;combineReducers&nbsp;}<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"reduxjs/toolkit"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>yourSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./yourSlice"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>anyOtherSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./anyOtherSlice"</code><br><br>
                                                <code style="color: skyblue;">const&nbsp;&nbsp;</code>reducer&nbsp;&nbsp;<code style="color:  rgb(223, 123, 223);">=&nbsp;&nbsp;</code><code style="color: rgb(223, 123, 223);">combineReducers</code>({<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yourStateKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>yourSlice,<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;anyOthersliceKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>anyOtherSlice
                                                <br>}) <br>
                                                <code style="color: skyblue;">export&nbsp;&nbsp;</code><code style="color: skyblue;">default&nbsp;&nbsp;</code>reducer
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="reactions">
                                    <div class="pa">
                                        <button class="span button" style="position: relative;"><i class="fa-regular fa-heart" style="color: #f4144c;"></i>&nbsp;<p>2.5k</p></button>
                                        <button class="span"><i class='bx bx-comment-dots' style='color:#2f80ed' ></i>&nbsp;<p>1.5k</p></button>
                                        <button class="span"><i class="fa-solid fa-share i3"></i>&nbsp;<p>450</p></button>
                                        <button class="span"><i class="fa-regular fa-flag i4"></i></button>
                                        <button class="span"><i class="fa-solid fa-upload i5"></i></button>
                                    </div>
                                   
                                </div>
                                
                            </li>
                            <li style="z-index: 2;">
                                <div class="header">
                                    <div class="profile-picture"></div>
                                    <div class="bio">
                                        <div class="user-d"><p class="user" style=" font-weight: 500;">David Erimusk</p></div>
                                        <p style="font-size: small; color: #888; line-height: 20px;">@reactions24346 &nbsp; 23 hrs ago</p>
                                    </div>
                                    <span class="elipisis-holder"><i class="uil uil-ellipsis-v" style="color: var(--text2);"></i><div class="icon-nav">
                                            
                                            <ul class="icon-nav-hold">
                                                <li><span class="icon-hold"><i class="uil uil-user-plus" style="font-size: 20px;"></i></span>Follow @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i class="fa-solid fa-user-plus"></i></span>Add Friend</li>
                                                <li><span class="icon-hold"><i class="uil uil-ban" style="font-size: 20px;"></i></span>Block @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><svg fill="#4070f4" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-1q142lx"><g><path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"></path></g></svg></span>Mute @AEmmanuel2006 </li>
                                                <li><span class="icon-hold"><i style='font-size: 20px;' class="uil uil-question-circle"></i></span>Report Post</li>
                                                <li><span class="icon-hold"><i class="fa-regular fa-flag"></i></span>Save Post</li>
                                                <li><span class="icon-hold"><i class="uil uil-message"></i></span>Message Abraham Emmanuel</li>
                                            </ul>
                                            
                                        </div></span>
                                </div>
                                <div class="about">
                                    <p>Just launched this new redux boiler plate code <br><br>  Just plain and easy</p>
                                </div>
                                <div class="the-post" style="position: relative; display: flex; justify-content: center;" >
                                    <div class="code">
                                        <div class="code-head">
                                            <button>Javascript</button>
                                            <div class="code-stuff">
                                                <div class="copy">
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editor">
                                            <div class="line">
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>{&nbsp;combineReducers&nbsp;}<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"reduxjs/toolkit"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>yourSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./yourSlice"</code>
                                                <code style="color: skyblue;">import&nbsp;&nbsp;</code>anyOtherSlice<code style="color: skyblue;">&nbsp;&nbsp;from&nbsp;&nbsp;</code><code style="color: goldenrod;">"./anyOtherSlice"</code><br><br>
                                                <code style="color: skyblue;">const&nbsp;&nbsp;</code>reducer&nbsp;&nbsp;<code style="color:  rgb(223, 123, 223);">=&nbsp;&nbsp;</code><code style="color: rgb(223, 123, 223);">combineReducers</code>({<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yourStateKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>yourSlice,<br>
                                                <code style="color:peachpuff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;anyOthersliceKeyName<code style="color:  rgb(223, 123, 223);">:&nbsp;&nbsp;</code></code>anyOtherSlice
                                                <br>}) <br>
                                                <code style="color: skyblue;">export&nbsp;&nbsp;</code><code style="color: skyblue;">default&nbsp;&nbsp;</code>reducer
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="reactions">
                                    <div class="pa">
                                        <button class="span button" style="position: relative;"><i class="fa-regular fa-heart" style="color: #f4144c;"></i>&nbsp;<p>2.5k</p></button>
                                        <button class="span"><i class='bx bx-comment-dots' style='color:#2f80ed' ></i>&nbsp;<p>1.5k</p></button>
                                        <button class="span"><i class="fa-solid fa-share i3"></i>&nbsp;<p>450</p></button>
                                        <button class="span"><i class="fa-regular fa-flag i4"></i></button>
                                        <button class="span"><i class="fa-solid fa-upload i5"></i></button>
                                    </div>
                                   
                                </div>
                                
                            </li>
            `
        },1000)
    }
    document.querySelector("body.switch .background-loader").style="display:flex; transition:.4s ;visibility:visible; opacity:1;"
    setTimeout(()=>{
        document.querySelector("body.switch .background-loader").style="visibility:hidden; opacity:0;"
    },2000)
})
// Global variables for tracking drag events
let isDragging = false, startY, startHeight ,updateHeight;

// Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeight(50);
}
function check_height(){
    if (updateHeight>=100){
        return false
    }else if (updateHeight==50){
        return true
    }
}
const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
    // Toggles the fullscreen class to bottomSheet if the height is equal to 100
    bottomSheet.classList.toggle("fullscreen", height === 100);
    check_height(height)
    updateHeight=height
}

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
    sheetContent.style.height = `0vh`;
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";
}

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");
}

// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
    if(!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);
    updateHeight=newHeight
}

// Determines whether to hide, set to fullscreen, or set to default 
// height based on the current height of the sheet content
const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
}

dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
close_icon.addEventListener("click",hideBottomSheet)
for(i=0;i<showModalBtn.length;i++)
	showModalBtn[i].onclick=showBottomSheet;


let average_icon
open_icon.addEventListener("click",()=>{
    if (check_height){
        updateSheetHeight(100)
    }else{
        updateSheetHeight(50)
    }
})

const nav = document.querySelector(".navigation"),
    toggleBtn = nav.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
  });
nav_app.addEventListener("click",()=>{
    document.querySelector(".center").classList.toggle("cool")
})

function show_prof(){
    document.querySelector(".main-posts").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".section1 .users-nav").style.display='none'
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".profile-page").style.display='block'
    },1500)
    vid.classList.remove('vid')
}
function show_home(){
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".main-posts").style.display='none'
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".main-posts").style.display='flex'

    },1500)
    vid.classList.remove('vid')
}
function show_message(){
    document.querySelector(".main-posts").style.display='none'
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".section1 .users-nav").style.display='none'
    vid.classList.remove('vid')
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".messages-page").style.display='block'
    },1500)
}
function show_explore(){
    document.querySelector(".main-posts").style.display='none'
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".section1 .users-nav").style.display='none'
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".explore-page").style.display='block'
    },1500)
    vid.classList.remove('vid')
}
const vid=document.querySelector(".videos-page")
function togvid(){
    vid.classList.toggle('vid')
}
const mnn=document.querySelector(".icon-nav")
const mmn2=document.querySelectorAll(`.icon-nav`)
const preview_img=document.querySelector(".preview-img")
const spinner_page=document.querySelector(".spinner-page")
function closePost(){
    preview_img.classList.remove("prev-show")
}
function openPost(){
    preview_img.classList.add("prev-show")
}
document.querySelector(".hhh").addEventListener("click",(e)=>{
    mnn.classList.toggle('s')
})
const more_Item=document.querySelectorAll('.post-list .elipisis-holder')
for (let i=1; i<more_Item.length; i++){
    more_Item[i].addEventListener("click", ()=>{
        mmn2[i].classList.toggle('s')
    })
}
setTimeout(()=>{
    document.querySelector(".background-loader").style="visibility:hidden; opacity:0;"
},2500)
setTimeout(()=>{
    spinner_page.style.display="none"
    document.querySelector(".main-posts").style.display='flex'
},5000)

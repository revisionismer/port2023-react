import React from "react";

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">Site coding <em>나의 작업물</em></h2>
                <div className="site__wrap">
                    <article className="site__item s1">
                        <span className="num">1.</span>
                        <div className="text">
                            <div>make</div>
                            <div>site compliant with</div>
                            <div>webstandard</div>
                        </div>
                        <h3 className="title">웹 표준을 준수한 사이트 제작</h3>
                        <div className="btn">
                            <a href="https://github.com/webstoryboy/port2023-vite">code</a>
                            <a href="https://port2023-vite.netlify.app/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : html5/css3, CSS Variable, Vite</span>
                        </div>
                    </article>
                    <article className="site__item s2">
                        <span className="num">2.</span>
                        <div className="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>react.js</div>
                        </div>
                        <h3 className="title">리액트를 이용한 사이트 제작</h3>
                        <div className="btn">
                            <a href="https://github.com/webstoryboy/port2023-react">code</a>
                            <a href="https://port2023-react.netlify.app/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : HTML5/CSS3, CSS Variable, Vite</span>
                        </div>
                    </article>
                    <article className="site__item s3">
                        <span className="num">3.</span>
                        <div className="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>vue.js</div>
                        </div>
                        <h3 className="title">뷰를 이용한 사이트 제작</h3>
                        <div className="btn">
                            <a href="https://github.com/webstoryboy/port2023-vue">code</a>
                            <a href="https://port2023-vue.netlify.app/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : vue.js, CSS Variable, vite</span>
                        </div>
                    </article>
                    <article className="site__item s4">
                        <span className="num">4.</span>
                        <div className="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>next.js</div>
                        </div>
                        <h3>넥스트를 이용한 사이트 제작</h3>
                        <div className="btn">
                            <a href="https://github.com/webstoryboy/port2023-next">code</a>
                            <a href="https://port2023-next.netlify.app/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : next.js, CSS Variable, Vite</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Site;
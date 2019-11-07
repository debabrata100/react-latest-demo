import React, { useState, useEffect } from "react";

function FadeIn(props) {
    const { delay = 50, transitionDuration = 400, children = [] } = props;
    const childrenCount = React.Children.count(children);
    let interval = 0;
    const [maxIsVisible, setMaxIsVisible] = useState(0);
    useEffect(() => {
        let i = 0;
        interval = setInterval(() => {
            i++;
            if (i > childrenCount) {
                clearInterval(interval);
            }
            setMaxIsVisible(i);
        }, delay);
        return () => {
            clearInterval(interval);
        };
    }, [childrenCount]);

    return (
        <div>
            {React.Children.map(children, (child, i) => {
                return (
                    <div
                        style={{
                            transition: `opacity ${transitionDuration}ms, top ${transitionDuration}ms`,
                            position: "relative",
                            top: maxIsVisible > i ? 0 : 20,
                            opacity: maxIsVisible > i ? 1 : 0
                        }}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
}
export default FadeIn;

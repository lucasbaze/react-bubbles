import React, { useState, useEffect } from 'react';
import { Pack } from '@potion/layout';
import { Svg, Circle } from '@potion/element';
import { LinearGradient, Pattern } from '@potion/extra';

const Bubbles = ({ colors }) => {
    const [bubbleData, setBubbleData] = useState([]);
    useEffect(() => {
        const generateBubbleData = colors.map((_, i) => ({
            value: Math.floor(Math.random() * (colors.length * 2)) + 1,
            key: `${i + 1}`,
        }));
        setBubbleData(generateBubbleData);
    }, [colors]);

    return (
        <div className="bubble-wrap">
            <p>bubbles</p>
            <Svg width={400} height={400}>
                <Pack
                    data={{
                        children: bubbleData,
                    }}
                    sum={datum => datum.value}
                    size={[400, 400]}
                    includeRoot={false}
                    nodeEnter={d => ({ ...d, r: 0 })}
                    animate
                >
                    {nodes =>
                        nodes
                            .map(({ x, y, r, key }, i) => {
                                if (i < colors.length) {
                                    let startColor = colors[i].code.hex;
                                    let stopColor = startColor + '77';
                                    return (
                                        <>
                                            <LinearGradient
                                                key={key}
                                                id={`pattern-${i}`}
                                                x1="50%"
                                                y1="50%"
                                                x2="100%"
                                                y2="100%"
                                                colors={[startColor, stopColor]}
                                            />
                                            <Circle
                                                key={key}
                                                cx={x}
                                                cy={y}
                                                r={r}
                                                fill={`url(#pattern-${i})`}
                                            />
                                        </>
                                    );
                                }
                                return null;
                            })
                            .filter(v => v)
                    }
                </Pack>
            </Svg>
        </div>
    );
};

export default Bubbles;

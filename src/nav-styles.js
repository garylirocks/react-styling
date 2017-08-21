import config from './config-styles';

const btn = {
    flex: 1,
    height: config.imageHeight,
    padding: 20,
    fontSize: 50,
    background: 'transparent',
    color: '#fff',
    textShadow: '1px 1px 3px rgba(0, 0, 0, .6)',
    border: 'none',
    outline: 0,
    cursor: 'pointer',
    userSelect: 'none'
};

const hidden = {
    visibility: 'hidden',
};

const prev = {
    ...btn,
    textAlign: 'left',
};

const prevHidden = {
    ...btn,
    ...hidden,
};

const next = {
    ...btn,
    textAlign: 'right',
};

const nextHidden = {
    ...btn,
    ...hidden,
};

export default {
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex'
    },
    prev,
    prevHidden,
    next,
    nextHidden,
};

module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ['react-svg-loader'],
    });

    return config;
};

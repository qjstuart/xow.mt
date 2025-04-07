module.exports = {
    // Override the "tags" property in the eleventyComputed object.
    // We need to ensure that the "project" tag is always included in the tags array.
    // This is because the "project" tag is needed to display the projects in a list.
    // This is done here and not in .eleventy.js to take effect for the portfolio collection only.
    eleventyComputed: {
        tags: (data) => {
            const tags = data.tags || [];
            const finalTags = new Set(["project", ...tags]);
            return Array.from(finalTags);
        },
    },
};

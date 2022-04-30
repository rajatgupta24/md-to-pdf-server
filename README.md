# Markdown to PDF

Hey everyone, today we're talking about a project that I build over a weekend to help me prepare my assignments fast.

The project is a markdown editor where you can use HTML* as well to create a markdown file like other editors, So what makes this different, well in other editors I've to first write my assignment in markdown then compile it & then I convert it into a PDF.

What the project does is, it simply acts as a markdown editor but you can copy the base64 of markdown* & PDF files & then convert them into files using any tool of your liking.

I've used React & typescript for frontend (*maybe tailwind UI in the future*) & for the backend I've used Nodejs & Express. I've used [base64topdf](https://www.npmjs.com/package/base64topdf) library to perform the conversion of file format.

You can find the code here:
- Client: [https://github.com/rajatgupta24/md-to-pdf-client](https://github.com/rajatgupta24/md-to-pdf-client)
- Server: [https://github.com/rajatgupta24/md-to-pdf-server](https://github.com/rajatgupta24/md-to-pdf-server)

*Features currently in progress

FROM node:17-alpine
LABEL description="A demo Dockerfile for build Docsify."
WORKDIR /docs
COPY index.html /docs/
COPY README.md /docs/
COPY coverpage.md /docs/
COPY images/ /docs/images/
RUN npm install -g docsify-cli@latest
EXPOSE 3000/tcp
ENTRYPOINT docsify serve .
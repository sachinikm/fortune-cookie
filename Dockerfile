# Base this image on an official Node.js long term support image.
# create an image to build our web application
FROM node:18.16.0-alpine

# Install Tini using Alpine Linux's package manager, apk.
# modify the created image above
RUN apk add --no-cache tini
# Use Tini as the init process. Tini will take care of system stuff
# for us, like forwarding signals and reaping zombie processes.
# when we run a container, we want it to use Tini as the init process
ENTRYPOINT ["/sbin/tini", "--"]
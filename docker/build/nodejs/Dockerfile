# escape=`

#
# Basic Windows node.js image for use as a parent image in the solution.
#

ARG PARENT_IMAGE
FROM $PARENT_IMAGE

ARG NODEJS_VERSION

USER ContainerAdministrator
WORKDIR c:\build
RUN curl.exe -sS -L -o node.zip https://nodejs.org/download/release/v16.14.0/node-v16.14.0-win-x64.zip
RUN tar -xf node.zip -C C:\
RUN move C:\node-v16.14.0-win-x64 c:\node1
RUN del node1.zip


RUN SETX /M PATH "%PATH%;C:\node1\"
RUN icacls.exe C:\node1\ /grant "Authenticated Users":(F) /t
USER ContainerUser

RUN npm --version
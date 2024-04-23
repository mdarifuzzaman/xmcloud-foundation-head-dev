# escape=`

#
# Basic Windows node.js image for use as a parent image in the solution.
#

ARG PARENT_IMAGE
FROM $PARENT_IMAGE

ARG NODEJS_VERSION

USER ContainerAdministrator
WORKDIR c:\build
RUN curl.exe -sS -L -o node.zip https://nodejs.org/download/release/v16.15.0/node-v16.15.0-win-x64.zip
RUN tar -xf node.zip -C C:\
RUN move C:\node-v16.15.0-win-x64 c:\node24
RUN del node.zip


RUN SETX /M PATH "%PATH%;C:\node24\"
RUN icacls.exe C:\node24\ /grant "Authenticated Users":(F) /t
USER ContainerUser

RUN npm --version
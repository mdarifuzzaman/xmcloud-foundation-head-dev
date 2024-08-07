# escape=`

#
# Basic Windows node.js image for use as a parent image in the solution.
#

ARG PARENT_IMAGE
FROM $PARENT_IMAGE

ARG NODEJS_VERSION

USER ContainerAdministrator
WORKDIR c:\build
RUN curl.exe -sS -L -o node24.zip https://nodejs.org/download/release/v20.10.0/node-v20.10.0-win-x64.zip
RUN tar -xf node24.zip -C C:\
RUN move C:\node-v20.10.0-win-x64 c:\node24
RUN del node24.zip


RUN SETX /M PATH "%PATH%;C:\node24\"
RUN icacls.exe C:\node24\ /grant "Authenticated Users":(F) /t
USER ContainerUser

RUN npm --version
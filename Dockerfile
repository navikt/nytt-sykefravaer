# Baseimage
FROM navikt/node-express:12.2.0-alpine

# Setter arbeidsområdet for RUN, CMD, COPY osv.
WORKDIR /

# Kopier fra /*folder* til *folder* i container
COPY ./public public
COPY ./server server
COPY ./build build

# Installerer deps for server
WORKDIR /server
RUN npm install

# exponerer port 5000 ut fra container. Samme port som express-server kjører på
EXPOSE 5000

# Start server
CMD [ "node", "server.js" ]
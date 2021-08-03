FROM gitpod/workspace-postgres

# Install Node and Yarn
ENV NODE_VERSION=14.14.0

RUN bash -c ". .nvm/nvm.sh && \
        nvm install ${NODE_VERSION} && \
        nvm alias default ${NODE_VERSION} && \
        npm install -g yarn"

ENV PATH=/home/gitpod/.nvm/versions/node/v${NODE_VERSION}/bin:$PATH

# Install Redis.
RUN sudo apt-get update \
  && sudo rm -rf /var/lib/apt/lists/*

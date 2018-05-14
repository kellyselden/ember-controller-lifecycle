#!/bin/bash
set -ev
SEED="${TRAVIS_PULL_REQUEST}"
if [ $SEED = false ]; then
  SEED="${TRAVIS_COMMIT}"
fi

#!/bin/bash

function brew-update {
  brew update
  brew upgrade
  brew cleanup
}

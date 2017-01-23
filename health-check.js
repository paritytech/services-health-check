'use strict'

const test = require('tape')
const fetch = require('node-fetch')

test('lookup service – mainnet', (t) => {
  t.plan(1)
  fetch('https://id.parity.io:443/health')
  .then((res) => {
    t.ok(t.ok, 'service reported as non-healthy')
  })
  .catch((err) => {
    t.error(err)
  })
})

test('lookup service – testnet', (t) => {
  t.plan(1)
  fetch('https://id.parity.io:8443/health')
  .then((res) => {
    t.ok(t.ok, 'service reported as non-healthy')
  })
  .catch((err) => {
    t.error(err)
  })
})

test('email verification – mainnet', (t) => {
  t.plan(1)
  fetch('https://email-verification.parity.io:18443/health')
  .then((res) => {
    t.ok(t.ok, 'service reported as non-healthy')
  })
  .catch((err) => {
    t.error(err)
  })
})

test('email verification – testnet', (t) => {
  t.plan(1)
  fetch('https://email-verification.parity.io:28443/health')
  .then((res) => {
    t.ok(t.ok, 'service reported as non-healthy')
  })
  .catch((err) => {
    t.error(err)
  })
})

test('sms verification – mainnet', (t) => {
  t.plan(1)
  fetch('https://sms-verification.parity.io:443/health')
  .then((res) => {
    t.ok(t.ok, 'service reported as non-healthy')
  })
  .catch((err) => {
    t.error(err)
  })
})

test('sms verification – testnet', (t) => {
  t.plan(1)
  fetch('https://sms-verification.parity.io:8443/health')
  .then((res) => {
    t.ok(t.ok, 'service reported as non-healthy')
  })
  .catch((err) => {
    t.error(err)
  })
})

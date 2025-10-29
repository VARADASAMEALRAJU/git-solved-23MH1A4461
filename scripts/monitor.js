/**
 * System Monitoring Script - Unified (Environment-Based)
 * Combines Production and Development features
 */

const ENV = process.env.NODE_ENV || 'development'; // Choose environment

// Base config
const baseConfig = {
  metricsEndpoint: 'http://localhost:8080/metrics',
  alertThreshold: 80,
  interval: 60000 // 1 minute
};

// Environment-based override
const envConfig =
  ENV === 'production'
    ? {
        version: 'v1.0',
        interval: 60000,
        metricsEndpoint: 'http://localhost:8080/metrics',
        debugMode: false,
        verboseLogging: false
      }
    : {
        version: 'v2.0-beta',
        interval: 5000,
        metricsEndpoint: 'http://localhost:3000/metrics',
        debugMode: true,
        verboseLogging: true
      };

const monitorConfig = { ...baseConfig, ...envConfig };

console.log('=================================');
console.log(`DevOps Simulator - Monitor ${monitorConfig.version}`);
console.log(`Environment Mode: ${ENV.toUpperCase()}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (monitorConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Simulated metrics
  const cpuUsage = Math.random() * 100;
  const memUsage = Math.random() * 100;
  const diskUsage = Math.random() * 100;

  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);

  if (monitorConfig.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }

  // Determine health status
  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('⚠️  System Status: WARNING - High resource usage');
  } else {
    console.log('✅ System Status: HEALTHY');
  }

  if (monitorConfig.verboseLogging) {
    console.log(`Next check in ${monitorConfig.interval}ms`);
  }
}

// Start monitoring
console.log(`Monitoring every ${monitorConfig.interval}ms`);
setInterval(checkSystemHealth, monitorConfig.interval);

// Run first check immediately
checkSystemHealth();

// Development-specific: Memory usage logging
if (monitorConfig.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}

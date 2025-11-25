const questions = [
  /* ========================= SET A ========================= */
  {
    "category": "set a",
    "question": "You're inside /etc/nginx and run cat ../hosts. Which file will it try to read?",
    "options": [
      "/etc/nginx/hosts",
      "/etc/hosts",
      "/var/hosts",
      "/usr/hosts"
    ],
    "answer": 1,
    "explanation": "The ../ moves one directory up from /etc/nginx to /etc, so the final path becomes /etc/hosts."
  },
  {
    "category": "set a",
    "question": "You run ls /. What does the single slash represent?",
    "options": [
      "The current user’s home directory",
      "A temporary directory",
      "The root of the entire filesystem tree",
      "A device mount point"
    ],
    "answer": 2,
    "explanation": "/ represents the root directory — the starting point of the entire Linux filesystem."
  },
  {
    "category": "set a",
    "question": "A minimal Docker image cannot run common commands like grep or cat. Which directory is likely missing?",
    "options": [
      "/etc",
      "/usr/bin or /bin",
      "/var/lib",
      "/opt"
    ],
    "answer": 1,
    "explanation": "Most user binaries live in /bin or /usr/bin; minimal Docker images often exclude them."
  },
  {
    "category": "set a",
    "question": "You installed a vendor application manually using a tar.gz file. Where should you expect it to be placed?",
    "options": [
      "/usr/bin",
      "/opt",
      "/home",
      "/etc"
    ],
    "answer": 1,
    "explanation": "Self-contained and vendor-supplied applications belong in /opt."
  },
  {
    "category": "set a",
    "question": "A user cannot open their project folder and receives Permission denied. Where are user project files typically stored?",
    "options": [
      "/etc",
      "/sys",
      "/home",
      "/var"
    ],
    "answer": 2,
    "explanation": "User files are normally stored under /home/<username>."
  },
  {
    "category": "set a",
    "question": "While running a binary, you get: error while loading shared libraries. Which directory contains shared libraries?",
    "options": [
      "/usr/share",
      "/lib or /lib64",
      "/opt",
      "/etc/lib"
    ],
    "answer": 1,
    "explanation": "Shared libraries (.so files) are stored in /lib and /lib64."
  },
  {
    "category": "set a",
    "question": "Your service reads a config file during boot, but changes are ignored. Where should you inspect?",
    "options": [
      "/usr/config",
      "/etc",
      "/var/log",
      "/opt"
    ],
    "answer": 1,
    "explanation": "Almost all service configuration files are stored under /etc."
  },
  {
    "category": "set a",
    "question": "You want to inspect environment variables and open file handles of a running process. Which directory helps?",
    "options": [
      "/sys/<pid>",
      "/proc/<pid>",
      "/etc/<pid>",
      "/var/lib/<pid>"
    ],
    "answer": 1,
    "explanation": "/proc/<pid> exposes live kernel and process data including env, cwd, and open files."
  },
  {
    "category": "set a",
    "question": "Docker shows: mounting failed: no such file or directory. What is the most likely cause?",
    "options": [
      "Using a relative path instead of an absolute path",
      "Running out of RAM",
      "Incorrect container image",
      "Using sudo without -E"
    ],
    "answer": 0,
    "explanation": "Docker requires absolute host paths (like /etc/config), not relative ones."
  },
  {
    "category": "set a",
    "question": "You want to manually mount an external disk for inspection. Which directory is intended for this purpose?",
    "options": [
      "/home",
      "/var/mnt",
      "/mnt",
      "/media/auto"
    ],
    "answer": 2,
    "explanation": "/mnt is used for admin-controlled manual mounts."
  },

  /* ========================= SET B ========================= */
  {
    "category": "set b",
    "question": "You find the binary of a service at /usr/sbin/toolX but no config. Where should you look?",
    "options": [
      "/etc",
      "/usr/bin",
      "/opt/toolX",
      "/var/log"
    ],
    "answer": 0,
    "explanation": "Configuration files are almost always stored under /etc."
  },
  {
    "category": "set b",
    "question": "A service crashed, and you need logs. Where do application logs normally live?",
    "options": [
      "/var/log",
      "/usr/share/logs",
      "/home/logs",
      "/etc/log"
    ],
    "answer": 0,
    "explanation": "Logs are stored inside /var/log."
  },
  {
    "category": "set b",
    "question": "You installed kubectl manually. Where should the binary typically be placed?",
    "options": [
      "/usr/local/bin",
      "/opt/kubectl",
      "/etc/kubectl",
      "/var/lib"
    ],
    "answer": 0,
    "explanation": "Global CLI tools are commonly placed in /usr/local/bin or /usr/bin."
  },
  {
    "category": "set b",
    "question": "You need to check persistent runtime data for services like Docker or MySQL. Where is this stored?",
    "options": [
      "/var/lib",
      "/etc/data",
      "/home",
      "/usr/share"
    ],
    "answer": 0,
    "explanation": "/var/lib holds runtime data that must persist across reboots."
  },
  {
    "category": "set b",
    "question": "You plug in a USB drive on Linux desktop. Where will it most likely appear?",
    "options": [
      "/mnt/usb",
      "/media/<username>/device",
      "/opt/usb",
      "/sys/usb"
    ],
    "answer": 1,
    "explanation": "Auto-mounted devices appear under /media/<username>/device."
  },
  {
    "category": "set b",
    "question": "You want to inspect hardware details and cgroups. Which directory provides the kernel's hardware view?",
    "options": [
      "/proc",
      "/sys",
      "/dev",
      "/usr/share/hw"
    ],
    "answer": 1,
    "explanation": "/sys exposes kernel hardware details and cgroup information."
  },
  {
    "category": "set b",
    "question": "A junior engineer puts config files in /usr/local/etc. Why is that incorrect for system services?",
    "options": [
      "Configs must always be in /opt",
      "System configs belong under /etc",
      "Config files should go in /var/lib",
      "System configs must always be in /usr/sbin"
    ],
    "answer": 1,
    "explanation": "Service and system configs must be in /etc."
  },
  {
    "category": "set b",
    "question": "You need to read detailed CPU and memory info. Which directory provides live system data?",
    "options": [
      "/etc/memory",
      "/var/log",
      "/proc",
      "/sys/kernel"
    ],
    "answer": 2,
    "explanation": "/proc contains live kernel-provided details like /proc/meminfo and /proc/cpuinfo."
  },
  {
    "category": "set b",
    "question": "Which directory contains static, architecture-independent data like documentation and icons?",
    "options": [
      "/usr/lib",
      "/usr/share",
      "/opt/share",
      "/etc/static"
    ],
    "answer": 1,
    "explanation": "/usr/share holds static resources such as docs, icons, and locales."
  },
  {
    "category": "set b",
    "question": "Your script calls /bin/sh but the container doesn’t have it. What is the simplest fix?",
    "options": [
      "Replace the base image",
      "Add a symlink from /bin/sh to an existing shell",
      "Install a window manager",
      "Edit the kernel parameters"
    ],
    "answer": 1,
    "explanation": "Creating a symlink (e.g., linking /bin/sh → /busybox/sh) restores compatibility easily."
  },

  /* ========================= SET C ========================= */
  {
    "category": "set c",
    "question": "You see /opt/mytool/bin/run but it fails due to missing libraries. Where does Linux normally load shared libraries from?",
    "options": [
      "/etc",
      "/lib or /lib64",
      "/var/lib",
      "/home/libs"
    ],
    "answer": 1,
    "explanation": "Shared libraries (.so) live under /lib and /lib64."
  },
  {
    "category": "set c",
    "question": "You want to verify DNS settings on a Linux machine. Which file should you inspect?",
    "options": [
      "/etc/dns",
      "/etc/resolv.conf",
      "/usr/bin/dns.conf",
      "/var/log/dns.log"
    ],
    "answer": 1,
    "explanation": "DNS resolver settings are stored in /etc/resolv.conf."
  },
  {
    "category": "set c",
    "question": "A beginner dev stores scripts directly in /usr/bin. Why is this a bad practice?",
    "options": [
      "Because /usr/bin is read-only",
      "Because /usr/bin is for distro-managed binaries, not personal scripts",
      "Because scripts cannot run from /usr bin",
      "Because scripts must live in /opt/scripts"
    ],
    "answer": 1,
    "explanation": "/usr/bin is meant for system-managed tools; personal scripts should be placed elsewhere."
  },
  {
    "category": "set c",
    "question": "Your NGINX logs 502 errors. Where do you check error logs?",
    "options": [
      "/etc/nginx/logs",
      "/usr/log/nginx",
      "/var/log/nginx",
      "/opt/nginx"
    ],
    "answer": 2,
    "explanation": "NGINX logs are normally stored under /var/log/nginx."
  },
  {
    "category": "set c",
    "question": "Your config file changes are not applied even after restarting the service. Where might systemd read its unit files from?",
    "options": [
      "/usr/sbin",
      "/var/lib/systemd",
      "/etc/systemd/system",
      "/opt/systemd"
    ],
    "answer": 2,
    "explanation": "Custom systemd unit files are read from /etc/systemd/system."
  },
  {
    "category": "set c",
    "question": "A process disappears instantly after running. To debug startup issues, where do you look first?",
    "options": [
      "/etc/log",
      "/var/log",
      "/usr/logs",
      "/home/logs"
    ],
    "answer": 1,
    "explanation": "Unexpected process exits are often explained by logs in /var/log."
  },
  {
    "category": "set c",
    "question": "You need to inspect a symbolic link that points to a device file. Which directory contains device files?",
    "options": [
      "/sys",
      "/dev",
      "/opt/dev",
      "/usr/devices"
    ],
    "answer": 1,
    "explanation": "Linux represents devices as files under /dev."
  },
  {
    "category": "set c",
    "question": "A tool complains: cannot find python3 but you know it's installed. Where should python3 typically live?",
    "options": [
      "/bin/python3",
      "/usr/bin/python3",
      "/opt/python",
      "/var/lib/python3"
    ],
    "answer": 1,
    "explanation": "User-level executables like python3 live in /usr/bin."
  },
  {
    "category": "set c",
    "question": "A script reads config relative to its current directory using ./config.json. What type of path is this?",
    "options": [
      "Absolute path",
      "Relative path",
      "Kernel path",
      "Device path"
    ],
    "answer": 1,
    "explanation": "Paths starting with ./ or ../ are relative paths."
  },
  {
    "category": "set c",
    "question": "You want to check if a binary is self-contained or depends on system libraries. Which directory stores system libraries?",
    "options": [
      "/etc/lib",
      "/usr/lib",
      "/opt/lib",
      "/var/lib"
    ],
    "answer": 1,
    "explanation": "/usr/lib stores libraries used by executables under /usr."
  },

  /* ========================= SET D ========================= */
  {
    "category": "set d",
    "question": "A system boots into emergency mode. Which directory MUST remain accessible for recovery tools to run?",
    "options": [
      "/opt",
      "/usr/local",
      "/bin and /sbin",
      "/home"
    ],
    "answer": 2,
    "explanation": "Essential binaries needed during boot and recovery live in /bin and /sbin."
  },
  {
    "category": "set d",
    "question": "You are troubleshooting a container that can't locate /etc/hosts from the host. What mistake is likely?",
    "options": [
      "The container is out of CPU",
      "The mount uses a relative path instead of absolute",
      "You installed the wrong version of Docker",
      "The host kernel is incompatible"
    ],
    "answer": 1,
    "explanation": "Docker volume mounts require absolute paths."
  },
  {
    "category": "set d",
    "question": "A tool is installed and located under /opt/mytool. Where would its configs likely be stored?",
    "options": [
      "/opt/mytool/conf",
      "/etc/mytool",
      "/usr/share/mytool",
      "/var/lib/mytool"
    ],
    "answer": 1,
    "explanation": "Even if binaries live under /opt, configs conventionally go under /etc."
  },
  {
    "category": "set d",
    "question": "A developer tries to store logs under /etc/logs. Why is this incorrect?",
    "options": [
      "/etc is read-only",
      "/etc is for configuration files, not logs",
      "/etc cannot store more than 10MB",
      "Logs must be stored under /usr"
    ],
    "answer": 1,
    "explanation": "Logs belong in /var/log, not /etc."
  },
  {
    "category": "set d",
    "question": "You want to know which disk devices exist on the system. Where do you look?",
    "options": [
      "/usr/dev",
      "/sys/devices",
      "/dev",
      "/var/lib/devices"
    ],
    "answer": 2,
    "explanation": "Block devices are represented as files under /dev."
  },
  {
    "category": "set d",
    "question": "Your process needs to check whether an external disk has been auto-mounted. Where should you look?",
    "options": [
      "/mnt",
      "/media",
      "/opt/disks",
      "/usr/share/disks"
    ],
    "answer": 1,
    "explanation": "Auto-mounted removable drives appear under /media."
  },
  {
    "category": "set d",
    "question": "An engineer thinks deleting /var/lib/docker will free disk space safely. Why is this dangerous?",
    "options": [
      "It contains systemd units",
      "It contains critical Docker data like images and containers",
      "It contains essential system binaries",
      "It contains the Linux kernel"
    ],
    "answer": 1,
    "explanation": "/var/lib/docker contains all images, containers, and metadata; deleting it breaks Docker."
  },
  {
    "category": "set d",
    "question": "A binary works on your laptop but not inside a minimal container. Why?",
    "options": [
      "The kernel is different",
      "The container is missing required libraries stored in /lib or /usr/lib",
      "Containers cannot run binaries unless root",
      "The filesystem is encrypted"
    ],
    "answer": 1,
    "explanation": "Minimal containers often lack libraries required by the binary."
  },
  {
    "category": "set d",
    "question": "You want to see if CPU is throttling. Where can you see kernel CPU information?",
    "options": [
      "/etc/cpuinfo",
      "/usr/bin/cpu",
      "/proc/cpuinfo",
      "/sys/cpuinfo"
    ],
    "answer": 2,
    "explanation": "/proc/cpuinfo provides live CPU info from the kernel."
  },
  {
    "category": "set d",
    "question": "You lost track of the working directory inside a script. Which command resolves the absolute path?",
    "options": [
      "pwd",
      "whoami",
      "ls -a",
      "cd .."
    ],
    "answer": 0,
    "explanation": "pwd shows the current working directory’s absolute path."
  },

  /* ========================= SET E ========================= */
  {
    "category": "set e",
    "question": "A tool tries to write cache data but fails. Which directory is typically used for cached files?",
    "options": [
      "/var/cache",
      "/etc/cache",
      "/usr/cache",
      "/home/cache"
    ],
    "answer": 0,
    "explanation": "/var/cache holds temporary cached files."
  },
  {
    "category": "set e",
    "question": "A process reads /proc/meminfo. What kind of data does it retrieve?",
    "options": [
      "Filesystem hierarchy",
      "Static documentation",
      "Real-time memory information",
      "Device drivers"
    ],
    "answer": 2,
    "explanation": "/proc contains dynamic, real-time data from the kernel including memory info."
  },
  {
    "category": "set e",
    "question": "Your binary fails only on one machine. ldd shows missing libs. Which directory is the fix likely in?",
    "options": [
      "/usr/share",
      "/var/lib",
      "/lib or /usr/lib",
      "/etc"
    ],
    "answer": 2,
    "explanation": "Libraries needed for execution are stored in /lib and /usr/lib."
  },
  {
    "category": "set e",
    "question": "You want to find which directory contains startup mount definitions for filesystems.",
    "options": [
      "/etc/fstab",
      "/usr/fstab",
      "/var/mounts",
      "/opt/fstab"
    ],
    "answer": 0,
    "explanation": "/etc/fstab defines filesystem mounts at boot."
  },
  {
    "category": "set e",
    "question": "A developer places logs in /home/logs/app.log. Why is this discouraged?",
    "options": [
      "Because logs must be in /usr",
      "Because home directories reset on reboot",
      "Because logs belong under /var/log, not /home",
      "Because home cannot store files over 5MB"
    ],
    "answer": 2,
    "explanation": "Logs belong in /var/log where system tools expect them."
  },
  {
    "category": "set e",
    "question": "A configuration change for SSH is not applied. Where is the SSH server config file located?",
    "options": [
      "/usr/bin/ssh/config",
      "/var/lib/ssh",
      "/etc/ssh/sshd_config",
      "/opt/ssh/config"
    ],
    "answer": 2,
    "explanation": "SSH daemon configuration is stored in /etc/ssh/sshd_config."
  },
  {
    "category": "set e",
    "question": "A device is not detected. Where can you check if the kernel created its device file?",
    "options": [
      "/sys/kernel",
      "/dev",
      "/usr/devices",
      "/var/dev"
    ],
    "answer": 1,
    "explanation": "Devices are represented as files under /dev."
  },
  {
    "category": "set e",
    "question": "You need to verify that fonts and icons required by a UI program exist. Where do static assets live?",
    "options": [
      "/usr/share",
      "/etc/share",
      "/var/lib/share",
      "/opt/share"
    ],
    "answer": 0,
    "explanation": "Static resources like icons and fonts live in /usr/share."
  },
  {
    "category": "set e",
    "question": "A relative path ./script.sh fails when run by systemd. Why?",
    "options": [
      "Because systemd strips file extensions",
      "Because systemd does not guarantee the working directory, so relative paths break",
      "Because scripts cannot run under systemd",
      "Because scripts must start with /opt"
    ],
    "answer": 1,
    "explanation": "systemd does not guarantee CWD; always use absolute paths in service files."
  },
  {
    "category": "set e",
    "question": "Your program reads files using absolute paths. What is the defining property of an absolute path?",
    "options": [
      "It starts with /",
      "It uses ./",
      "It uses ../",
      "It must point to /etc"
    ],
    "answer": 0,
    "explanation": "Absolute paths always begin at the filesystem root (/)."
  }
];

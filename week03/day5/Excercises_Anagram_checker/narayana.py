def next_permutation(sequence, compare) -> bool:
	count = len(sequence)
	i = count
	# stage 1
	while True:
		if i < 2:
			return False 
		i -= 1
		if compare(sequence[i - 1], sequence[i]):
			break
	# stage 2
	j = count
	while j > i and not compare(sequence[i - 1], sequence[j - 1]):
		j -= 1
	sequence[i - 1], sequence[j - 1] = sequence[j - 1], sequence[i - 1]
	# stage 3
	j = count
	while i < j - 1:
		j -= 1
		sequence[i], sequence[j] = sequence[j], sequence[i]
		i += 1
	return True